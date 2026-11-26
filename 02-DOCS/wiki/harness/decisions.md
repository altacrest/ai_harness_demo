# Harness decisions

- Accepted plan `09d52e6105174fe253311b3b45d25bb78a71cb67bfcb4253b4a68fd3f140c4f1`.
- Project kind: software.
- SDD: deferred.

## [2026-11-26] wiki init + impeccable local

- Wiki `02-DOCS/` inicializada por `harness` (inbox, raw, raw/worklog, wiki con index/log/gaps); `CLAUDE.md` raíz creado con Knowledge map. `AGENTS.md` sin tocar.
- Skill `impeccable` (pbakaus/impeccable) instalada a nivel proyecto en `.claude/skills/impeccable` vía `npx skills add`, por petición del usuario. Ya existía global en `~/.agents/skills/`. Aviso del instalador: Snyk "Critical Risk", Socket 1 alert.

## [2026-11-26] impeccable como skill propia del equipo; design de rsc retirada

**Requisito:** que todo el equipo (Claude, Antigravity, Gemini, OpenCode) use `impeccable` para diseño, sin solaparse con la skill `design` de rsc.

**Hecho:**
- Copia única y versionada en `.claude/skills/impeccable/` (pbakaus/impeccable, SKILL v4.11.1, engine 0.1.31). Enlaces relativos desde `.antigravity/rsc/`, `.gemini/rsc/` y `.opencode/rsc/` (symlinks commiteables; en Windows sin `core.symlinks` llegan como archivo de texto).
- Declarada en `.rsc.json` -> `ownSkills: ["impeccable"]`. `rsc doctor` (4.2.1) la lista como propia en los cuatro targets, sin "missing".
- `design` retirada con `npx @ericrisco/rsc uninstall design --target <t>` por cada target (el comando solo actúa sobre un target por llamada). rsc guardó copia de seguridad (`rsc backups` / `rsc restore`).

**Limitación conocida de rsc 4.2.1:** `design` está en `DEFAULT_SKILL_FLOOR` (suelo obligatorio) y sigue en `onboarding.plan.policy.skills`. Consecuencias:
- `rsc doctor` muestra `[HIGH] .rsc.json predates a skill the catalog now requires: design`.
- `rsc sync` (lo que corre un clon nuevo o un upgrade) la reinstala: verificado con `sync --dry-run`.
- rsc no tiene opt-out por skill. Retirarla de forma duradera exige un cambio upstream en rsc.

### Revisión de `scripts/impeccable` (launcher POSIX; `impeccable.cmd` es el equivalente Windows con certutil)

Qué ejecuta, en este orden:
1. `$IMPECCABLE_BIN` si está definido: se ejecuta **sin verificación**.
2. Binario hermano `scripts/bin/<os>-<arch>/impeccable`: solo comprueba que su versión coincide con `VERSION`, **sin hash**.
3. `~/.impeccable/bin/impeccable`: solo comprueba que responde como motor (handshake), **sin hash**.
4. Caché por versión `~/.impeccable/bin/0.1.31/impeccable`: **sha256 verificado** contra `engine-checksums.txt` (con un sello `.verified` para no recalcularlo en cada ejecución).
5. `impeccable` en el PATH: solo handshake, **sin hash**.
6. Si no encuentra nada, descarga `https://github.com/pbakaus/impeccable/releases/download/engine-v0.1.31/impeccable-<os>-<arch>` (la base se puede cambiar con `IMPECCABLE_DOWNLOAD_BASE`) con curl o wget.

Verificación de la descarga:
- **Falla cerrado.** Si no hay checksum para la plataforma, no hay herramienta sha256, el archivo llega vacío o el hash no coincide, lo borra y sale con código 127.
- Solo ejecuta el binario después de verificarlo.
- Los checksums vienen en el mismo repositorio que publica los binarios. Protegen contra corrupción o un mirror alterado, no contra que se comprometa el propio upstream. No hay firma independiente.
- La descarga va a `~/.impeccable/` (fuera del repo), salvo que `IMPECCABLE_HOME` apunte dentro.

Riesgo para el repo: el binario hermano de `scripts/bin/` no lleva hash y podría acabar en un commit. Queda ignorado en `.gitignore` (`.claude/skills/impeccable/scripts/bin/` y `.impeccable/`), comprobado con `git check-ignore`.

### Alertas de skills.sh (auditoría del 2026-11-25)

- **Snyk: Fail / CRITICAL.**
  - E004, prompt injection. La puntuación real es de riesgo medio (0.30): marca que la skill descarga un binario en el primer uso y que envía informes guardados a un servicio externo de Impeccable.
  - W011, contenido de terceros. Riesgo bajo: critique y audit cargan en el navegador una URL que elige el usuario.
  - W013, modificación de servicios del sistema. Riesgo bajo: hooks persistentes del detector de diseño, `pin`, reparación con `doctor` e inyección de un script en vivo en el archivo de entrada del proyecto.
- **Socket: Warn.** Anomalía de severidad baja en `scripts/modern-screenshot.umd.js`, sin indicadores de malware: puede traer recursos remotos y cargar Web Workers.
- **Gen Agent Trust Hub: Pass / SAFE.** Señala, sin bloquear, ejecución remota del binario, persistencia (instala hooks en `.claude/settings.json` y similares) y escalado de permisos de sandbox en Codex.

**Regla para el equipo:** no aceptar sin revisar que impeccable añada hooks a `.claude/settings.json`, `.cursor/` o `.codex/`, ni el envío de informes a su servicio externo. Ambas cosas cambian la configuración compartida o sacan datos fuera del proyecto.
