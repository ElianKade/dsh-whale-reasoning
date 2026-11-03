window.__ModuleLoader__.load({
  id: 'dsh-whale-reasoning',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const NS = 'ultraReasoning';
    const STYLE_ID = 'dsh-whale-reasoning-style';

    const zh = {
      'provider.account': 'DeepSeek 账号',
      'badge.release': '1017',
      'trigger.aria': '选择模型与推理等级，当前模型 {model}，当前等级 {level}',
      'trigger.ariaNoLevel': '选择模型与推理等级，当前模型 {model}',
      'trigger.loading': '选择模型与推理等级',
      'menu.aria': '模型与推理等级',
      'menu.model': '模型',
      'menu.reasoning': '推理等级',
      'card.aria': '鲸鲸推理强度',
      'card.ariaMax': '鲸神推理强度',
      'card.title': '鲸鲸',
      'card.titleMax': '鲸神',
      'card.loading': '正在加载模型…',
      'card.chooseModel': '选择模型',
      'card.noModels': '暂无可用模型。',
      'card.noReasoning': '当前模型未提供推理等级。',
      'card.models': '选择模型',
      'card.modelsBack': '返回模型与推理等级',
      'card.reset': '恢复默认推理等级',
      'card.effortAria': '设置推理等级为 {level}',
      'card.error': '切换失败：{message}',
      'card.unavailable': '当前会话不支持模型选择。'
    };

    const en = {
      'provider.account': 'DeepSeek Account',
      'badge.release': '1017',
      'trigger.aria': 'Choose model and reasoning level. Current model {model}, level {level}',
      'trigger.ariaNoLevel': 'Choose model and reasoning level. Current model {model}',
      'trigger.loading': 'Choose model and reasoning level',
      'menu.aria': 'Model and reasoning level',
      'menu.model': 'Model',
      'menu.reasoning': 'Reasoning',
      'card.aria': '鲸鲸 reasoning effort',
      'card.ariaMax': '鲸神 reasoning effort',
      'card.title': '鲸鲸',
      'card.titleMax': '鲸神',
      'card.loading': 'Loading models…',
      'card.chooseModel': 'Choose a model',
      'card.noModels': 'No models available.',
      'card.noReasoning': 'This model provides no reasoning levels.',
      'card.models': 'Choose a model',
      'card.modelsBack': 'Back to model and reasoning level',
      'card.reset': 'Reset to the default reasoning level',
      'card.effortAria': 'Set reasoning effort to {level}',
      'card.error': 'Could not switch: {message}',
      'card.unavailable': 'Model selection is unavailable in this session.'
    };

    const STARS = [
      { x: 7, y: 30, size: 2.1, duration: 2.9, delay: 0.2, opacity: 0.85 },
      { x: 12, y: 66, size: 1.5, duration: 3.7, delay: 1.1, opacity: 0.55 },
      { x: 18, y: 42, size: 1.2, duration: 3.2, delay: 2.0, opacity: 0.45 },
      { x: 24, y: 22, size: 1.7, duration: 4.1, delay: 0.7, opacity: 0.7 },
      { x: 31, y: 64, size: 2.3, duration: 3.4, delay: 1.8, opacity: 0.8 },
      { x: 38, y: 35, size: 1.4, duration: 2.6, delay: 0.4, opacity: 0.5 },
      { x: 44, y: 73, size: 1.6, duration: 3.9, delay: 2.4, opacity: 0.6 },
      { x: 51, y: 27, size: 2.0, duration: 3.1, delay: 1.4, opacity: 0.78 },
      { x: 57, y: 58, size: 1.2, duration: 4.4, delay: 0.9, opacity: 0.5 },
      { x: 63, y: 40, size: 1.8, duration: 3.5, delay: 2.7, opacity: 0.7 },
      { x: 70, y: 70, size: 1.3, duration: 2.8, delay: 1.6, opacity: 0.48 },
      { x: 76, y: 24, size: 1.9, duration: 3.8, delay: 0.3, opacity: 0.75 },
      { x: 82, y: 55, size: 2.2, duration: 3.0, delay: 2.2, opacity: 0.85 },
      { x: 88, y: 36, size: 1.4, duration: 4.0, delay: 1.2, opacity: 0.55 },
      { x: 93, y: 67, size: 1.7, duration: 3.3, delay: 2.9, opacity: 0.65 }
    ];

    const WHALE_PATH =
      'M22.9168 1.43018C22.6713 1.31018 22.5658 1.53918 22.4223 1.65519C22.3733 1.69269 22.3318 1.74169 22.2903 1.78669C21.9317 2.1697 21.5127 2.42121 20.9657 2.39121C' +
      '20.1657 2.34621 19.4827 2.59771 18.8787 3.20973C18.7502 2.45521 18.3236 2.0047 17.6746 1.71569C17.3351 1.56568 16.9916 1.41518 16.7536 1.08867C16.5876 0.856163 ' +
      '16.5421 0.597155 16.4591 0.341647C16.4061 0.187643 16.3536 0.0301382 16.1761 0.00363739C15.9836 -0.0263635 15.9081 0.135141 15.8326 0.270145C15.5306 0.822162 15' +
      '.4136 1.43018 15.4251 2.0462C15.4516 3.43174 16.0366 4.53527 17.1991 5.3203C17.3311 5.4103 17.3651 5.5003 17.3236 5.63181C17.2441 5.90231 17.1501 6.16482 17.067' +
      '1 6.43533C17.0141 6.60784 16.9351 6.64584 16.7501 6.57033C16.1121 6.30383 15.5611 5.90931 15.074 5.4328C14.2475 4.63328 13.5 3.75075 12.568 3.05973C12.349 2.898' +
      '22 12.13 2.74822 11.9034 2.60522C10.9524 1.68169 12.028 0.923165 12.277 0.833162C12.5375 0.739159 12.3675 0.41615 11.5259 0.42015C10.6844 0.42365 9.91439 0.7056' +
      '58 8.93286 1.08117C8.78935 1.13767 8.63835 1.17867 8.48384 1.21267C7.59332 1.04367 6.66829 1.00617 5.70226 1.11517C3.88321 1.31768 2.43016 2.1777 1.36213 3.6457' +
      '5C0.0790928 5.4103 -0.222916 7.41536 0.146595 9.50642C0.535106 11.7105 1.66014 13.535 3.38869 14.9616C5.18125 16.4406 7.24581 17.1657 9.60138 17.0266C11.0319 16' +
      '.9441 12.6245 16.7526 14.421 15.2321C14.874 15.4576 15.3496 15.5476 16.1381 15.6151C16.7456 15.6716 17.3306 15.5851 17.7836 15.4911C18.4931 15.3411 18.4441 14.6' +
      '841 18.1876 14.5636C16.1081 13.595 16.5646 13.9891 16.1496 13.67C17.2061 12.42 18.8202 10.1979 19.3182 7.17235C19.3672 6.83834 19.4297 6.36783 19.4222 6.09732C1' +
      '9.4182 5.93231 19.4562 5.86831 19.6447 5.84931C20.1657 5.78931 20.6712 5.64681 21.1357 5.3913C22.4833 4.65528 23.0268 3.44624 23.1548 1.9972C23.1738 1.77569 23.' +
      '1508 1.54668 22.9168 1.43018ZM11.1749 14.4736C9.15936 12.889 8.18184 12.3675 7.77832 12.39C7.40081 12.4125 7.46881 12.8445 7.55182 13.126C7.63882 13.404 7.75182' +
      ' 13.5955 7.91033 13.8396C8.01983 14.0011 8.09533 14.2411 7.80083 14.4216C7.15181 14.8231 6.02327 14.2866 5.97027 14.2601C4.65673 13.4865 3.5587 12.4655 2.78467 ' +
      '11.069C2.03715 9.72493 1.60314 8.28289 1.53164 6.74384C1.51264 6.37233 1.62214 6.24082 1.99215 6.17332C2.47916 6.08332 2.98118 6.06432 3.46769 6.13582C5.52476 6' +
      '.43633 7.27581 7.35586 8.74385 8.8129C9.58188 9.64243 10.2159 10.634 10.8689 11.6025C11.5634 12.631 12.3105 13.611 13.262 14.4146C13.598 14.6961 13.866 14.9101 ' +
      '14.1225 15.0681C13.349 15.1546 12.058 15.1731 11.1749 14.4746L11.1749 14.4736ZM12.141 8.25988C12.141 8.09488 12.273 7.96338 12.439 7.96338C12.4765 7.96338 12.51' +
      '05 7.97088 12.541 7.98188C12.5825 7.99688 12.6205 8.01938 12.6505 8.05338C12.7035 8.10588 12.7335 8.18088 12.7335 8.25988C12.7335 8.42489 12.6015 8.55639 12.435' +
      '5 8.55639C12.2695 8.55639 12.141 8.42489 12.141 8.25988ZM15.1415 9.79893C14.949 9.87793 14.7565 9.94544 14.5715 9.95294C14.2845 9.96794 13.9715 9.85143 13.8015 ' +
      '9.70893C13.5375 9.48742 13.3485 9.36342 13.2695 8.97691C13.2355 8.8119 13.2545 8.55639 13.2845 8.40989C13.3525 8.09438 13.277 7.89187 13.0545 7.70787C12.8735 7.' +
      '55786 12.643 7.51636 12.39 7.51636C12.2955 7.51636 12.209 7.47486 12.1445 7.44136C12.039 7.38886 11.9519 7.25735 12.035 7.09585C12.0615 7.04335 12.19 6.91584 12' +
      '.22 6.89334C12.5635 6.69784 12.9595 6.76184 13.326 6.90834C13.6655 7.04735 13.9225 7.30236 14.292 7.66287C14.6695 8.09838 14.7375 8.21838 14.9525 8.54539C15.122' +
      '5 8.8009 15.277 9.06341 15.3831 9.36392C15.4471 9.55142 15.3641 9.70493 15.1415 9.79893Z';

    const CSS = `
.dsu-root {
  position: relative;
  display: inline-flex;
  min-width: 0;
}

.dsu-trigger {
  -webkit-appearance: none;
  appearance: none;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  max-width: min(360px, 45cqw);
  height: 28px;
  margin: 0;
  padding: 0 4px 0 8px;
  border: 0;
  border-radius: var(--dsw-radius-sm, 8px);
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
  outline: none;
}

.dsu-trigger:hover:not(:disabled),
.dsu-trigger[data-open="true"] {
  background: var(--dsw-alias-interactive-bg-hover);
}

.dsu-trigger:focus-visible {
  box-shadow: 0 0 0 2px var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary, #5b7cff));
}

.dsu-trigger:disabled {
  color: var(--dsw-alias-label-dimmed);
  cursor: default;
}

.dsu-triggerLabel {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  color: currentColor;
  font-weight: 400;
  white-space: nowrap;
}

.dsu-triggerLabel > * {
  min-width: 0;
}

.dsu-modelName {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dsu-modelBadge {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  margin-left: 1px;
  padding: 0 5px;
  border-radius: 999px;
  background: rgba(91, 124, 255, 0.18);
  background: color-mix(in srgb, var(--dsw-alias-state-business-primary, #5b7cff) 22%, transparent);
  color: var(--dsw-alias-state-business-primary, #5b7cff);
  font-size: 10px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.02em;
}

.dsu-triggerLevel {
  flex: none;
  color: var(--dsw-alias-label-caption);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.dsu-triggerChev {
  flex: none;
  width: 11px;
  height: 11px;
  opacity: 0.55;
}

.dsu-triggerSpinner {
  flex: none;
  width: 10px;
  height: 10px;
  border: 1.5px solid rgba(143, 165, 255, 0.34);
  border-top-color: #aab9ff;
  border-radius: 50%;
  animation: dsu-spin 0.8s linear infinite;
}

.dsu-menu {
  position: fixed;
  z-index: 1100;
  box-sizing: border-box;
  width: min(330px, calc(100vw - 24px));
  padding: 5px;
  border: 1px solid var(--dsw-alias-border-l1, rgba(128, 140, 190, 0.18));
  border-radius: 14px;
  background: var(--dsw-specific-menu, var(--dsw-alias-bg-overlay, #171a25));
  box-shadow: var(--dsw-elevation-prominent, 0 18px 48px rgba(0, 0, 0, 0.45));
  color: var(--dsw-alias-label-primary);
  -webkit-backdrop-filter: var(--dsw-menu-backdrop-filter, blur(20px));
  backdrop-filter: var(--dsw-menu-backdrop-filter, blur(20px));
  outline: none;
}

.dsu-menu[data-ready="true"] {
  animation: dsu-menu-in 0.16s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

.dsu-menu:focus-visible {
  outline: 2px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary, #5b7cff));
  outline-offset: 2px;
}

.dsu-menu button {
  font-family: inherit;
}

.dsu-menuRoot {
  display: flex;
  flex-direction: column;
}

.dsu-menuRow {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) 13px;
  gap: 12px;
  align-items: center;
  width: 100%;
  min-height: 48px;
  margin: 0;
  padding: 0 13px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  cursor: pointer;
  outline: none;
}

.dsu-menuRow:hover:not(:disabled),
.dsu-menuRow:focus-visible {
  background: var(--dsw-alias-interactive-bg-hover);
}

.dsu-menuRow:focus-visible {
  box-shadow: 0 0 0 2px var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary, #5b7cff));
}

.dsu-menuRow:disabled {
  color: var(--dsw-alias-label-dimmed);
  cursor: default;
}

.dsu-menuLabel {
  color: var(--dsw-alias-label-primary);
  font-size: 12.5px;
  white-space: nowrap;
}

.dsu-menuValue {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  min-width: 0;
  overflow: hidden;
  color: var(--dsw-alias-label-secondary);
  font-size: 12.5px;
  white-space: nowrap;
}

.dsu-menuValue > * {
  min-width: 0;
}

.dsu-menuChev {
  width: 13px;
  height: 13px;
  color: var(--dsw-alias-label-tertiary, var(--dsw-alias-label-secondary));
  opacity: 0.62;
}

.dsu-menu .dsu-pane {
  margin-top: 0;
  padding: 2px;
}

.dsu-menu .dsu-paneHead {
  grid-template-columns: 26px minmax(0, 1fr) 26px;
  margin: 0 0 2px;
  padding: 0 2px;
}

.dsu-menu .dsu-paneTitle {
  color: var(--dsw-alias-label-secondary);
  font-size: 10.5px;
}

.dsu-menu .dsu-modelList {
  max-height: min(260px, 50vh);
}

.dsu-menuError {
  margin: 5px 8px 4px;
  color: var(--dsw-alias-state-error-primary, #ff8f8f);
  font-size: 10.5px;
  line-height: 15px;
}

.dsu-card {
  position: fixed;
  z-index: 1100;
  box-sizing: border-box;
  width: min(360px, calc(100vw - 24px));
  padding: 14px 17px 13px;
  border: 1px solid var(--dsw-alias-border-l1, rgba(128, 140, 190, 0.18));
  border-radius: 20px;
  background: var(--dsw-specific-menu, var(--dsw-alias-bg-overlay, #171a25));
  background: linear-gradient(
    180deg,
    color-mix(in srgb, #4a63ff 10%, var(--dsw-specific-menu, var(--dsw-alias-bg-overlay, #171a25))),
    var(--dsw-specific-menu, var(--dsw-alias-bg-overlay, #171a25)) 62%
  );
  box-shadow: var(--dsw-elevation-prominent, 0 18px 48px rgba(0, 0, 0, 0.45));
  color: var(--dsw-alias-label-primary);
  -webkit-backdrop-filter: var(--dsw-menu-backdrop-filter, blur(20px));
  backdrop-filter: var(--dsw-menu-backdrop-filter, blur(20px));
  isolation: isolate;
  outline: none;
}

.dsu-card::before {
  content: "";
  position: absolute;
  z-index: 0;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(120% 82% at 50% -28%, rgba(110, 130, 255, 0.22), transparent 62%);
  pointer-events: none;
}

.dsu-card > * {
  position: relative;
  z-index: 1;
}

.dsu-card[data-ready="true"] {
  animation: dsu-card-in 0.22s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

.dsu-card:focus-visible {
  outline: 2px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary, #5b7cff));
  outline-offset: 2px;
}

.dsu-card button {
  font-family: inherit;
}

.dsu-head {
  display: grid;
  grid-template-columns: 26px minmax(0, 1fr) 26px;
  align-items: center;
  min-height: 26px;
  margin: 0 0 1px;
}

.dsu-whaleAvatar {
  display: grid;
  justify-self: start;
  place-items: center;
  width: 26px;
  height: 26px;
  overflow: hidden;
  border: 1px solid rgba(112, 142, 255, 0.18);
  border-radius: 8px;
  background:
    radial-gradient(130% 100% at 30% 0%, rgba(60, 92, 220, 0.42), transparent 64%),
    linear-gradient(145deg, #121a34, #080d1e);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.24);
  animation: dsu-whale-glow 4.2s ease-in-out infinite;
}

.dsu-whale {
  display: block;
  width: 18px;
  height: 13.3px;
  color: #5f7dff;
  filter: drop-shadow(0 0 6px rgba(84, 119, 255, 0.4));
}

.dsu-title {
  justify-self: center;
  color: var(--dsw-alias-label-primary);
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.01em;
}

@supports (background: color-mix(in srgb, white, black)) {
  .dsu-title {
    background: linear-gradient(
      92deg,
      color-mix(in srgb, var(--dsw-alias-label-primary) 58%, #7693ff),
      color-mix(in srgb, var(--dsw-alias-label-primary) 80%, #b9c9ff)
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.dsu-title[data-max="true"] {
  color: #b3c0ff;
  filter: drop-shadow(0 0 9px rgba(101, 88, 255, 0.38));
}

@supports (background: color-mix(in srgb, white, black)) {
  .dsu-title[data-max="true"] {
    background: linear-gradient(
      100deg,
      #1d49ff 0%,
      #2c5bff 27%,
      #4b4dff 56%,
      #6a43ff 79%,
      #9a4dff 100%
    );
    background-size: 220% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: dsu-title-flow 2.2s ease-in-out infinite;
  }
}

@keyframes dsu-title-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.dsu-reset {
  display: grid;
  justify-self: end;
  place-items: center;
  width: 26px;
  height: 26px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary, var(--dsw-alias-label-secondary));
  cursor: pointer;
  outline: none;
}

.dsu-reset:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.dsu-reset:focus-visible {
  box-shadow: 0 0 0 2px var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary, #5b7cff));
}

.dsu-reset:disabled {
  cursor: default;
  opacity: 1;
}

.dsu-resetIcon {
  display: grid;
  place-items: center;
}

.dsu-resetIcon[data-spin="true"] .dsu-resetSvg {
  animation: dsu-reset-spin 0.52s cubic-bezier(0.32, 0.72, 0.24, 1);
}

.dsu-resetSvg {
  display: block;
  width: 15px;
  height: 15px;
}

.dsu-modelRow {
  display: flex;
  justify-content: center;
  min-height: 20px;
  margin-top: 1px;
}

.dsu-modelText {
  max-width: 100%;
  overflow: hidden;
  color: var(--dsw-alias-label-secondary);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dsu-main {
  min-width: 0;
}

.dsu-slider {
  margin-top: 14px;
}

.dsu-track {
  --pct: 0%;
  position: relative;
  height: 48px;
  border-radius: 24px;
  background: linear-gradient(180deg, #0a1024, #0d1736 70%, #0b1230);
  box-shadow:
    inset 0 0 0 1px rgba(130, 150, 220, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    0 8px 22px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  outline: none;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
}

.dsu-track:active,
.dsu-track[data-drag="true"] {
  cursor: grabbing;
}

.dsu-track:focus-visible {
  box-shadow:
    inset 0 0 0 1px rgba(130, 150, 220, 0.2),
    0 0 0 2px var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary, #5b7cff));
}

.dsu-track[aria-disabled="true"] {
  cursor: default;
  opacity: 1;
}

.dsu-range {
  position: absolute;
  z-index: 1;
  top: 3px;
  right: 24px;
  bottom: 3px;
  left: 24px;
  pointer-events: none;
}

.dsu-fill {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: -21px;
  width: calc(21px + var(--pct));
  overflow: hidden;
  border-radius: 999px;
  background: linear-gradient(100deg, #1d49ff 0%, #2c5bff 27%, #4b4dff 56%, #6a43ff 79%, #9a4dff 100%);
  background-size: 220% 100%;
  box-shadow:
    0 0 20px rgba(64, 92, 255, 0.36),
    inset 0 0 16px rgba(255, 255, 255, 0.08);
  transition: width 0.42s cubic-bezier(0.22, 0.8, 0.22, 1);
  animation: dsu-flow 7s ease-in-out infinite;
}

.dsu-fillAurora {
  position: absolute;
  inset: -30%;
  background:
    radial-gradient(circle at 28% 54%, rgba(104, 196, 255, 0.45), transparent 40%),
    radial-gradient(circle at 72% 38%, rgba(168, 118, 255, 0.52), transparent 46%);
  filter: blur(7px);
  opacity: 0.8;
  animation: dsu-aurora 6.4s ease-in-out infinite;
}

.dsu-fillSheen {
  position: absolute;
  top: -30%;
  bottom: -30%;
  left: 0;
  width: 42%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.32), transparent);
  opacity: 0;
  transform: rotate(9deg);
  animation: dsu-sheen 5.8s ease-in-out infinite;
}

.dsu-stars {
  position: absolute;
  inset: 0;
  animation: dsu-star-drift 9s ease-in-out infinite alternate;
}

.dsu-warp {
  position: absolute;
  z-index: 2;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
}

.dsu-warpLine {
  position: absolute;
  left: -38%;
  width: 34%;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, transparent, rgba(190, 216, 255, 0.36), #ffffff 58%, transparent);
  filter: drop-shadow(0 0 4px rgba(190, 216, 255, 0.95));
  opacity: 0;
}

.dsu-warpLine:first-child {
  top: 31%;
  animation: dsu-warp 0.58s linear infinite;
}

.dsu-warpLine:last-child {
  top: 65%;
  width: 24%;
  animation: dsu-warp 0.44s linear 0.18s infinite;
  opacity: 0.8;
}

.dsu-track[data-max="true"] .dsu-warp {
  opacity: 1;
}

.dsu-track[data-max="true"] .dsu-fill {
  animation-duration: 2.2s;
}

.dsu-track[data-max="true"] .dsu-fillAurora {
  animation-duration: 3.2s;
}

.dsu-track[data-max="true"] .dsu-fillSheen {
  animation-duration: 2.4s;
}

.dsu-track[data-max="true"] .dsu-stars {
  animation-duration: 3s;
}

.dsu-star {
  position: absolute;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 0 5px rgba(220, 230, 255, 0.9);
  animation: dsu-twinkle var(--dur) ease-in-out var(--delay) infinite;
}

.dsu-thumb {
  position: absolute;
  z-index: 3;
  top: 0;
  left: var(--pct);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 27%, #ffffff 0%, #fafbff 42%, #e9edff 100%);
  box-shadow:
    0 3px 8px rgba(3, 8, 30, 0.42),
    0 0 0 1px rgba(255, 255, 255, 0.55),
    inset 0 -5px 10px rgba(160, 175, 255, 0.16),
    0 0 24px rgba(120, 145, 255, 0.22);
  pointer-events: none;
  transform: translateX(-50%);
  transition:
    left 0.42s cubic-bezier(0.22, 0.8, 0.22, 1),
    transform 0.18s ease,
    box-shadow 0.2s ease;
}

.dsu-thumb::before {
  content: "";
  position: absolute;
  inset: -7px;
  border: 1px solid rgba(165, 185, 255, 0.22);
  border-radius: 50%;
  animation: dsu-breathe 3.2s ease-in-out infinite;
}

.dsu-track[data-max="true"] .dsu-thumb {
  box-shadow:
    0 3px 9px rgba(3, 8, 30, 0.44),
    0 0 0 1px rgba(255, 255, 255, 0.62),
    inset 0 -5px 10px rgba(160, 175, 255, 0.16),
    0 0 32px rgba(139, 110, 255, 0.55);
}

.dsu-track[data-drag="true"] .dsu-fill,
.dsu-track[data-drag="true"] .dsu-thumb {
  transition: none;
}

.dsu-track[data-drag="true"] .dsu-thumb {
  transform: translateX(-50%) scale(1.06);
}

.dsu-labels {
  position: relative;
  height: 13px;
  margin: 7px 24px 0;
}

.dsu-label {
  position: absolute;
  top: 0;
  margin: 0;
  padding: 1px 2px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--dsw-alias-label-caption);
  font-family: inherit;
  font-size: 9px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  transform: translateX(-50%);
  transition: color 0.18s ease;
}

.dsu-label:hover:not(:disabled) {
  color: var(--dsw-alias-label-secondary);
}

.dsu-label[data-active="true"] {
  color: color-mix(in srgb, var(--dsw-alias-label-primary) 70%, #9aaeff);
}

.dsu-label:disabled {
  cursor: default;
  opacity: 1;
}

.dsu-empty {
  padding: 22px 8px 16px;
  color: var(--dsw-alias-label-tertiary, var(--dsw-alias-label-secondary));
  font-size: 11.5px;
  line-height: 17px;
  text-align: center;
}

.dsu-error {
  margin-top: 9px;
  color: var(--dsw-alias-state-error-primary, #ff8f8f);
  font-size: 10.5px;
  line-height: 15px;
  text-align: center;
}

.dsu-pane {
  margin-top: 10px;
}

.dsu-paneHead {
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr) 24px;
  align-items: center;
  min-height: 24px;
  margin-bottom: 3px;
}

.dsu-back {
  display: grid;
  justify-self: start;
  place-items: center;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary, var(--dsw-alias-label-secondary));
  cursor: pointer;
  outline: none;
}

.dsu-back:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.dsu-back:focus-visible {
  box-shadow: 0 0 0 2px var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary, #5b7cff));
}

.dsu-backIcon {
  width: 13px;
  height: 13px;
  transform: rotate(90deg);
}

.dsu-paneTitle {
  overflow: hidden;
  color: var(--dsw-alias-label-tertiary, var(--dsw-alias-label-secondary));
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dsu-modelList {
  max-height: 188px;
  padding: 2px 0 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-color: var(--dsw-alias-scrollbar-bg-l2, rgba(120, 135, 170, 0.3)) transparent;
  scrollbar-width: thin;
}

.dsu-modelList::-webkit-scrollbar {
  width: 8px;
}

.dsu-modelList::-webkit-scrollbar-thumb {
  border: 2px solid transparent;
  border-radius: 4px;
  background: var(--dsw-alias-scrollbar-bg-l2, rgba(120, 135, 170, 0.3));
  background-clip: content-box;
}

.dsu-modelGroup + .dsu-modelGroup {
  margin-top: 3px;
}

.dsu-modelGroupLabel {
  padding: 7px 8px 3px;
  overflow: hidden;
  color: var(--dsw-alias-label-caption);
  font-size: 9px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0.08em;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.dsu-modelOption {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 16px;
  gap: 8px;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 7px 8px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  cursor: pointer;
  outline: none;
}

.dsu-modelOption:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover);
}

.dsu-modelOption[data-current="true"] {
  background: color-mix(in srgb, #4c66ff 12%, transparent);
}

.dsu-modelOption:focus-visible {
  box-shadow: 0 0 0 2px var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary, #5b7cff));
}

.dsu-modelOption:disabled {
  color: var(--dsw-alias-label-dimmed);
  cursor: default;
}

.dsu-modelOptionName {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dsu-check {
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  color: var(--dsw-alias-brand-primary, #6d8aff);
}

.dsu-checkSvg {
  width: 13px;
  height: 13px;
}

.dsu-listSpinner {
  width: 9px;
  height: 9px;
  border: 1.5px solid rgba(143, 165, 255, 0.3);
  border-top-color: #aab9ff;
  border-radius: 50%;
  animation: dsu-spin 0.8s linear infinite;
}

@keyframes dsu-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes dsu-aurora {
  0%, 100% { transform: translate3d(-6%, -4%, 0) scale(1); opacity: 0.65; }
  50% { transform: translate3d(7%, 5%, 0) scale(1.1); opacity: 0.95; }
}

@keyframes dsu-sheen {
  0% { transform: translateX(-80%) rotate(9deg); opacity: 0; }
  16% { opacity: 0.62; }
  62% { opacity: 0.12; }
  100% { transform: translateX(280%) rotate(9deg); opacity: 0; }
}

@keyframes dsu-twinkle {
  0%, 100% { opacity: 0.18; transform: scale(0.7); }
  50% { opacity: 1; transform: scale(1.18); }
}

@keyframes dsu-star-drift {
  from { transform: translate3d(-3px, 1px, 0); }
  to { transform: translate3d(4px, -2px, 0); }
}

@keyframes dsu-breathe {
  0%, 100% { transform: scale(0.94); opacity: 0.58; }
  50% { transform: scale(1.06); opacity: 0.16; }
}

@keyframes dsu-whale-glow {
  0%, 100% { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.24), 0 0 0 rgba(84, 119, 255, 0); }
  50% { box-shadow: 0 4px 14px rgba(0, 0, 0, 0.26), 0 0 14px rgba(84, 119, 255, 0.16); }
}

@keyframes dsu-menu-in {
  from { opacity: 0; transform: translateY(4px) scale(0.994); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes dsu-warp {
  0% { transform: translateX(0); opacity: 0; }
  10% { opacity: 1; }
  72% { opacity: 0.95; }
  100% { transform: translateX(410%); opacity: 0; }
}

@keyframes dsu-reset-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

@keyframes dsu-card-in {
  from { opacity: 0; transform: translateY(8px) scale(0.985); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes dsu-spin {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .dsu-card,
  .dsu-menu,
  .dsu-title,
  .dsu-whaleAvatar,
  .dsu-fill,
  .dsu-fillAurora,
  .dsu-fillSheen,
  .dsu-stars,
  .dsu-star,
  .dsu-warpLine,
  .dsu-thumb::before,
  .dsu-resetIcon[data-spin="true"] .dsu-resetSvg,
  .dsu-triggerSpinner,
  .dsu-listSpinner {
    animation: none !important;
  }

  .dsu-warp {
    display: none;
  }

  .dsu-fill,
  .dsu-thumb,
  .dsu-label {
    transition-duration: 0.01ms;
  }
}
`;

    function orderModelProviders(groups) {
      if (!Array.isArray(groups)) return [];
      return groups.slice().sort((left, right) => {
        const rank = (group) => (group.id === 'deepseek-account' ? 0 : group.id === 'deepseek-official' ? 1 : 2);
        return rank(left) - rank(right);
      });
    }

    function providerName(group, t) {
      return group.id === 'deepseek-account' ? t('provider.account') : group.name;
    }

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    function indexToPercent(index, count) {
      if (count <= 1) return 0;
      return (index / (count - 1)) * 100;
    }

    function percentToIndex(percent, count) {
      if (count <= 1) return 0;
      return Math.round((clamp(percent, 0, 100) / 100) * (count - 1));
    }

    function describeError(result) {
      const error = result && result.error;
      if (error === undefined || error === null) return '';
      if (typeof error === 'string') return error;
      if (typeof error.message === 'string') {
        return error.code === undefined ? error.message : `${error.code}: ${error.message}`;
      }
      return String(error);
    }

    function errorText(error) {
      if (error === undefined || error === null) return '';
      if (typeof error === 'string') return error;
      if (typeof error.message === 'string') return error.message;
      return String(error);
    }

    function WhaleMark({ className }) {
      return h(
        'svg',
        {
          className,
          viewBox: '0 0 23.16 17.04',
          fill: 'currentColor',
          'aria-hidden': 'true',
          focusable: 'false'
        },
        h('path', { d: WHALE_PATH })
      );
    }

    function ChevronRight({ className }) {
      return h(
        'svg',
        {
          className,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          'aria-hidden': 'true',
          focusable: 'false'
        },
        h('path', { d: 'm9 6 6 6-6 6' })
      );
    }

    function ChevronDown({ className }) {
      return h(
        'svg',
        {
          className,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          'aria-hidden': 'true',
          focusable: 'false'
        },
        h('path', { d: 'm6 9 6 6 6-6' })
      );
    }

    function ResetIcon({ className }) {
      return h(
        'svg',
        {
          className,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '1.8',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          'aria-hidden': 'true',
          focusable: 'false'
        },
        h('path', { d: 'M20 11.2a8 8 0 1 1-2.4-5.4' }),
        h('path', { d: 'M20 4.2v4.2h-4.2' })
      );
    }

    function CheckIcon({ className }) {
      return h(
        'svg',
        {
          className,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          'aria-hidden': 'true',
          focusable: 'false'
        },
        h('path', { d: 'm5 12.5 4.2 4.2L19 7' })
      );
    }

    function ModelPicker({ groups, current, busy, listRef, onBack, onPick, renderLabel, t }) {
      const rows = [];
      for (const group of groups) {
        const provider = { id: group.id, name: providerName(group, t) };
        const models = Array.isArray(group.models) ? group.models : [];
        if (models.length === 0) continue;
        rows.push(
          h(
            'div',
            { className: 'dsu-modelGroup', key: group.id },
            h('div', { className: 'dsu-modelGroupLabel' }, provider.name),
            models.map((model) => {
              const selected = current !== null && current !== undefined && current.provider === group.id && current.model === model.id;
              return h(
                'button',
                {
                  key: model.id,
                  type: 'button',
                  role: 'menuitemradio',
                  'aria-checked': selected,
                  className: 'dsu-modelOption',
                  'data-current': selected ? 'true' : undefined,
                  title: model.name,
                  disabled: busy,
                  onClick: () => onPick(group, model)
                },
                h('span', { className: 'dsu-modelOptionName' }, renderLabel(group, model, 'option', selected)),
                h(
                  'span',
                  { className: 'dsu-check', 'aria-hidden': 'true' },
                  selected
                    ? busy
                      ? h('span', { className: 'dsu-listSpinner' })
                      : h(CheckIcon, { className: 'dsu-checkSvg' })
                    : null
                )
              );
            })
          )
        );
      }

      return h(
        'div',
        { className: 'dsu-pane' },
        h(
          'div',
          { className: 'dsu-paneHead' },
          h(
            'button',
            {
              type: 'button',
              className: 'dsu-back',
              'aria-label': t('card.modelsBack'),
              title: t('card.modelsBack'),
              onClick: onBack
            },
            h(ChevronDown, { className: 'dsu-backIcon' })
          ),
          h('span', { className: 'dsu-paneTitle' }, t('card.models')),
          h('span')
        ),
        rows.length === 0
          ? h('div', { className: 'dsu-empty' }, t('card.noModels'))
          : h('div', { ref: listRef, className: 'dsu-modelList', role: 'menu', 'aria-label': t('card.models') }, rows)
      );
    }

    const EMPTY_SNAPSHOT = Object.freeze({
      current: null,
      groups: [],
      pending: null,
      retainedEffort: undefined,
      status: 'idle'
    });
    const EMPTY_STORE = Object.freeze({
      subscribe: () => () => {},
      getSnapshot: () => EMPTY_SNAPSHOT
    });

    function UltraReasoningView({ locked, available, directory, load, select, t }) {
      const store =
        directory !== null &&
        typeof directory === 'object' &&
        typeof directory.subscribe === 'function' &&
        typeof directory.getSnapshot === 'function'
          ? directory
          : EMPTY_STORE;
      const state =
        React.useSyncExternalStore(
          React.useCallback((notify) => store.subscribe(notify), [store]),
          React.useCallback(() => store.getSnapshot(), [store])
        ) ?? {};

      const [open, setOpen] = React.useState(false);
      const [pane, setPane] = React.useState('menu');
      const [dragPercent, setDragPercent] = React.useState(null);
      const [dragging, setDragging] = React.useState(false);
      const [optimisticIndex, setOptimisticIndex] = React.useState(null);
      const [error, setError] = React.useState(null);
      const [position, setPosition] = React.useState(null);
      const [spinSeq, setSpinSeq] = React.useState(0);

      const rootRef = React.useRef(null);
      const triggerRef = React.useRef(null);
      const surfaceRef = React.useRef(null);
      const trackRef = React.useRef(null);
      const modelListRef = React.useRef(null);
      const pointerRef = React.useRef(null);
      const applySeqRef = React.useRef(0);
      const loadRef = React.useRef(load);
      loadRef.current = load;

      const rawId = React.useId();
      const menuId = `dsu-menu-${rawId.replace(/:/g, '')}`;
      const cardId = `dsu-card-${rawId.replace(/:/g, '')}`;

      const groups = React.useMemo(() => orderModelProviders(state.groups), [state.groups]);
      const current = state.current ?? null;

      let currentModel = null;
      let currentGroup = null;
      for (const group of groups) {
        const found = Array.isArray(group.models) ? group.models.find((model) => model.id === current?.model) : undefined;
        if (found !== undefined && current !== null && group.id === current.provider) {
          currentModel = found;
          currentGroup = group;
          break;
        }
      }

      const reasoning = currentModel?.reasoning;
      const efforts = React.useMemo(() => (reasoning && Array.isArray(reasoning.efforts) ? reasoning.efforts : []), [reasoning]);
      const effectiveEffort = current?.reasoningEffort ?? reasoning?.defaultEffort;
      let selectedIndex = efforts.findIndex((effort) => effort.id === effectiveEffort);
      if (selectedIndex < 0) selectedIndex = 0;
      const shownIndex =
        optimisticIndex !== null && optimisticIndex >= 0 && optimisticIndex < efforts.length
          ? optimisticIndex
          : selectedIndex;
      const percent = dragPercent !== null ? dragPercent : indexToPercent(shownIndex, efforts.length);
      const activeIndex =
        dragging && dragPercent !== null ? percentToIndex(dragPercent, efforts.length) : shownIndex;
      const level = efforts[shownIndex];
      const activeLevel = efforts[activeIndex];
      const busy = state.pending !== null && state.pending !== undefined;
      const disabled = Boolean(locked) || !available;
      const interactive = disabled || busy;
      const resetDisabled =
        disabled || busy || current === null || reasoning === undefined || efforts.length === 0;

      const waiting = state.status === 'loading' || state.status === 'idle' || state.status === undefined;
      const modelName =
        currentModel?.name ??
        (groups.length === 0
          ? waiting
            ? t('card.loading')
            : t('card.noModels')
          : t('card.chooseModel'));

      const triggerAria = currentModel
        ? level === undefined
          ? t('trigger.ariaNoLevel', { model: modelName })
          : t('trigger.aria', { model: modelName, level: level.name })
        : t('trigger.loading');

      const renderModelLabel = (group, model) => {
        const official = group.id === 'deepseek-account' || group.id === 'deepseek-official';
        const badge =
          official && model.id === 'deepseek-flash' && model.name === 'DeepSeek-V4.1-Flash'
            ? t('badge.release')
            : null;
        return h(
          React.Fragment,
          null,
          h('span', { className: 'dsu-modelName' }, model.name),
          badge === null ? null : h('span', { className: 'dsu-modelBadge' }, badge)
        );
      };

      React.useEffect(() => {
        if (available) loadRef.current?.();
      }, [available]);

      React.useEffect(() => {
        if (optimisticIndex === null) return;
        const target = efforts[optimisticIndex];
        if (target === undefined || target.id === effectiveEffort) {
          setOptimisticIndex(null);
        }
      }, [optimisticIndex, effectiveEffort, efforts]);

      React.useEffect(() => {
        if (locked && open) {
          setOpen(false);
          setPane('menu');
          setPosition(null);
        }
      }, [locked, open]);

      const close = React.useCallback((restoreFocus) => {
        setOpen(false);
        setPane('menu');
        setPosition(null);
        setError(null);
        setDragging(false);
        setDragPercent(null);
        pointerRef.current = null;
        if (restoreFocus) {
          queueMicrotask(() => {
            triggerRef.current?.focus({ preventScroll: true });
          });
        }
      }, []);

      React.useEffect(() => {
        if (!open) return undefined;
        const onKeyDown = (event) => {
          if (event.key !== 'Escape') return;
          event.preventDefault();
          event.stopPropagation();
          if (pane === 'models') {
            setPane('menu');
            setPosition(null);
            setError(null);
          } else {
            close(true);
          }
        };
        const onPointerDown = (event) => {
          if (rootRef.current?.contains(event.target) === true) return;
          if (surfaceRef.current?.contains(event.target) === true) return;
          close(false);
        };
        document.addEventListener('keydown', onKeyDown, true);
        document.addEventListener('mousedown', onPointerDown, true);
        return () => {
          document.removeEventListener('keydown', onKeyDown, true);
          document.removeEventListener('mousedown', onPointerDown, true);
        };
      }, [open, pane, close]);

      React.useLayoutEffect(() => {
        if (!open) {
          setPosition(null);
          return undefined;
        }
        const place = () => {
          const trigger = triggerRef.current;
          const surface = surfaceRef.current;
          if (trigger === null || surface === null) return;
          const rect = trigger.getBoundingClientRect();
          const width = surface.offsetWidth || (pane === 'reasoning' ? 360 : 330);
          const height = surface.offsetHeight || 58;
          const margin = 12;
          let left = pane === 'reasoning' ? rect.left + rect.width / 2 - width / 2 : rect.left;
          left = clamp(left, margin, Math.max(margin, window.innerWidth - width - margin));
          let top = rect.top - 8 - height;
          if (top < margin) {
            top = clamp(rect.bottom + 8, margin, Math.max(margin, window.innerHeight - height - margin));
          }
          setPosition((previous) =>
            previous !== null && Math.abs(previous.left - left) < 0.5 && Math.abs(previous.top - top) < 0.5
              ? previous
              : { left, top }
          );
        };
        place();
        window.addEventListener('resize', place);
        return () => {
          window.removeEventListener('resize', place);
        };
      }, [open, pane]);

      React.useEffect(() => {
        if (!open) return undefined;
        const frame = requestAnimationFrame(() => {
          if (pane === 'models') {
            const list = modelListRef.current;
            const first = list?.querySelector('[aria-checked="true"]') ?? list?.querySelector('button');
            (first ?? surfaceRef.current)?.focus({ preventScroll: true });
          } else if (pane === 'reasoning') {
            (efforts.length > 0 ? trackRef.current : surfaceRef.current)?.focus({ preventScroll: true });
          } else {
            const first = surfaceRef.current?.querySelector('[data-menu-row]') ?? surfaceRef.current;
            first?.focus({ preventScroll: true });
          }
        });
        return () => cancelAnimationFrame(frame);
      }, [open, pane, efforts.length]);

      const fail = (message) => {
        setOptimisticIndex(null);
        setError(t('card.error', { message }));
      };

      const applyIndex = (index) => {
        if (interactive || current === null || index < 0 || index >= efforts.length) return;
        const next = efforts[index];
        if (next === undefined) return;
        if (next.id === effectiveEffort) {
          setOptimisticIndex(null);
          setError(null);
          return;
        }
        applySeqRef.current += 1;
        const seq = applySeqRef.current;
        setError(null);
        setOptimisticIndex(index);
        setDragPercent(null);
        let result;
        try {
          result = select({ provider: current.provider, model: current.model, reasoningEffort: next.id });
        } catch (cause) {
          fail(errorText(cause));
          return;
        }
        Promise.resolve(result)
          .then((outcome) => {
            if (seq !== applySeqRef.current) return;
            if (outcome === undefined) {
              fail(t('card.unavailable'));
              return;
            }
            if (!outcome.ok) {
              fail(describeError(outcome));
            }
          })
          .catch((cause) => {
            if (seq !== applySeqRef.current) return;
            fail(errorText(cause));
          });
      };

      const chooseModel = (group, model) => {
        if (disabled || busy) return;
        if (current !== null && current.provider === group.id && current.model === model.id) {
          close(true);
          return;
        }
        applySeqRef.current += 1;
        const seq = applySeqRef.current;
        setOptimisticIndex(null);
        setError(null);
        let result;
        try {
          result = select({ provider: group.id, model: model.id });
        } catch (cause) {
          fail(errorText(cause));
          return;
        }
        Promise.resolve(result)
          .then((outcome) => {
            if (seq !== applySeqRef.current) return;
            if (outcome === undefined) {
              fail(t('card.unavailable'));
              return;
            }
            if (!outcome.ok) {
              fail(describeError(outcome));
              return;
            }
            close(true);
          })
          .catch((cause) => {
            if (seq !== applySeqRef.current) return;
            fail(errorText(cause));
          });
      };

      const showMenu = () => {
        if (disabled) return;
        loadRef.current?.();
        setPane('menu');
        setPosition(null);
        setError(null);
        setOpen(true);
      };

      const showModels = () => {
        if (disabled || busy) return;
        loadRef.current?.();
        setPane('models');
        setPosition(null);
        setError(null);
      };

      const showReasoning = () => {
        if (disabled) return;
        setPane('reasoning');
        setPosition(null);
        setError(null);
      };

      const resetLevel = () => {
        if (resetDisabled) return;
        setSpinSeq((value) => value + 1);
        const defaultIndex = efforts.findIndex((effort) => effort.id === reasoning?.defaultEffort);
        if (defaultIndex >= 0) applyIndex(defaultIndex);
      };

      const percentFromClientX = (clientX) => {
        const track = trackRef.current;
        if (track === null) return percent;
        const rect = track.getBoundingClientRect();
        const usable = rect.width - 48;
        if (usable <= 0) return 0;
        return clamp(((clientX - (rect.left + 24)) / usable) * 100, 0, 100);
      };

      const releasePointer = (pointerId) => {
        const track = trackRef.current;
        if (track === null) return;
        try {
          if (track.hasPointerCapture?.(pointerId)) track.releasePointerCapture(pointerId);
        } catch {
          // A lost capture is harmless.
        }
      };

      const onTrackPointerDown = (event) => {
        if (interactive || efforts.length === 0 || event.button !== 0 || pointerRef.current !== null) return;
        event.preventDefault();
        pointerRef.current = event.pointerId;
        try {
          event.currentTarget.setPointerCapture(event.pointerId);
        } catch {
          // Pointer capture can be unavailable in rare embedding contexts.
        }
        const next = percentFromClientX(event.clientX);
        setDragging(true);
        setDragPercent(next);
        event.currentTarget.focus({ preventScroll: true });
      };

      const onTrackPointerMove = (event) => {
        if (pointerRef.current !== event.pointerId) return;
        setDragPercent(percentFromClientX(event.clientX));
      };

      const finishPointer = (event, commit) => {
        if (pointerRef.current !== event.pointerId) return;
        const next = percentFromClientX(event.clientX);
        pointerRef.current = null;
        setDragging(false);
        setDragPercent(null);
        releasePointer(event.pointerId);
        if (commit) applyIndex(percentToIndex(next, efforts.length));
      };

      const onTrackPointerUp = (event) => {
        finishPointer(event, true);
      };

      const onTrackPointerCancel = (event) => {
        if (pointerRef.current !== event.pointerId) return;
        pointerRef.current = null;
        setDragging(false);
        setDragPercent(null);
        releasePointer(event.pointerId);
      };

      const onTrackKeyDown = (event) => {
        if (interactive || efforts.length === 0 || event.nativeEvent?.isComposing) return;
        let next = shownIndex;
        if (event.key === 'ArrowRight' || event.key === 'ArrowUp') next += 1;
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') next -= 1;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = efforts.length - 1;
        else return;
        event.preventDefault();
        next = clamp(next, 0, efforts.length - 1);
        applyIndex(next);
      };

      const onModelBack = () => {
        setPane('menu');
        setPosition(null);
        setError(null);
      };

      if (!available) return null;

      const triggerLabel =
        currentModel === null ? modelName : `${modelName}${level === undefined ? '' : ` · ${level.name}`}`;

      const labelNode =
        currentGroup === null || currentModel === null
          ? modelName
          : renderModelLabel(currentGroup, currentModel, 'trigger', true);

      const header = h(
        'div',
        { className: 'dsu-head' },
        h(
          'span',
          { className: 'dsu-whaleAvatar', 'aria-hidden': 'true' },
          h(WhaleMark, { className: 'dsu-whale' })
        ),
        h(
          'span',
          { className: 'dsu-title', 'data-max': activeLevel?.id === 'max' ? 'true' : undefined },
          activeLevel?.id === 'max' ? t('card.titleMax') : t('card.title')
        ),
        h(
          'button',
          {
            type: 'button',
            className: 'dsu-reset',
            title: t('card.reset'),
            'aria-label': t('card.reset'),
            disabled: resetDisabled,
            onClick: resetLevel
          },
          h(
            'span',
            { key: spinSeq, className: 'dsu-resetIcon', 'data-spin': spinSeq > 0 ? 'true' : undefined },
            h(ResetIcon, { className: 'dsu-resetSvg' })
          )
        )
      );

      const modelLine = h(
        'div',
        { className: 'dsu-modelRow' },
        h('span', { className: 'dsu-modelText', title: modelName }, modelName)
      );

      const track =
        efforts.length === 0
          ? h('div', { className: 'dsu-empty' }, t('card.noReasoning'))
          : h(
              'div',
              { className: 'dsu-slider' },
              h(
                'div',
                {
                  ref: trackRef,
                  className: 'dsu-track',
                  role: 'slider',
                  tabIndex: interactive ? -1 : 0,
                  'aria-label': t('card.aria'),
                  'aria-valuemin': 0,
                  'aria-valuemax': Math.max(0, efforts.length - 1),
                  'aria-valuenow': activeIndex,
                  'aria-valuetext': activeLevel?.name,
                  'aria-disabled': interactive ? undefined : 'true',
                  'data-drag': dragging ? 'true' : undefined,
                  'data-max': activeIndex === efforts.length - 1 ? 'true' : undefined,
                  style: { '--pct': `${percent}%` },
                  onPointerDown: onTrackPointerDown,
                  onPointerMove: onTrackPointerMove,
                  onPointerUp: onTrackPointerUp,
                  onPointerCancel: onTrackPointerCancel,
                  onLostPointerCapture: (event) => {
                    if (pointerRef.current === event.pointerId) {
                      pointerRef.current = null;
                      setDragging(false);
                      setDragPercent(null);
                    }
                  },
                  onKeyDown: onTrackKeyDown
                },
                h(
                  'div',
                  { className: 'dsu-range' },
                  h(
                    'div',
                    { className: 'dsu-fill', 'aria-hidden': 'true' },
                    h('span', { className: 'dsu-fillAurora' }),
                    h('span', { className: 'dsu-fillSheen' }),
                    h(
                      'span',
                      { className: 'dsu-stars' },
                      STARS.map((star, index) =>
                        h('span', {
                          key: index,
                          className: 'dsu-star',
                          style: {
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            opacity: star.opacity,
                            '--dur': `${star.duration}s`,
                            '--delay': `${star.delay}s`
                          }
                        })
                      )
                    ),
                    h(
                      'span',
                      { className: 'dsu-warp' },
                      h('span', { className: 'dsu-warpLine' }),
                      h('span', { className: 'dsu-warpLine' })
                    )
                  ),
                  h('span', { className: 'dsu-thumb', 'aria-hidden': 'true' })
                )
              ),
              h(
                'div',
                { className: 'dsu-labels' },
                efforts.map((effort, index) =>
                  h(
                    'button',
                    {
                      key: effort.id,
                      type: 'button',
                      className: 'dsu-label',
                      tabIndex: -1,
                      disabled: interactive,
                      'aria-label': t('card.effortAria', { level: effort.name }),
                      'data-active': index === activeIndex ? 'true' : undefined,
                      style: {
                        left: `${indexToPercent(index, efforts.length)}%`,
                        transform: 'translateX(-50%)'
                      },
                      onClick: () => {
                        trackRef.current?.focus({ preventScroll: true });
                        applyIndex(index);
                      }
                    },
                    effort.name
                  )
                )
              )
            );

      const card = h(
        'div',
        {
          ref: surfaceRef,
          id: cardId,
          className: 'dsu-card',
          role: 'dialog',
          'aria-label': activeLevel?.id === 'max' ? t('card.ariaMax') : t('card.aria'),
          tabIndex: -1,
          'data-ready': position !== null ? 'true' : undefined,
          style: position === null ? { left: 0, top: 0, visibility: 'hidden' } : { left: position.left, top: position.top }
        },
        header,
        h('div', { className: 'dsu-main' }, modelLine, track),
        error !== null ? h('div', { className: 'dsu-error', role: 'alert' }, error) : null
      );

      const menu = h(
        'div',
        {
          ref: surfaceRef,
          id: menuId,
          className: 'dsu-menu',
          role: 'dialog',
          'aria-label': t('menu.aria'),
          tabIndex: -1,
          'data-ready': position !== null ? 'true' : undefined,
          style: position === null ? { left: 0, top: 0, visibility: 'hidden' } : { left: position.left, top: position.top }
        },
        pane === 'models'
          ? h(ModelPicker, {
              groups,
              current,
              busy,
              listRef: modelListRef,
              onBack: onModelBack,
              onPick: chooseModel,
              renderLabel: renderModelLabel,
              t
            })
          : h(
              'div',
              { className: 'dsu-menuRoot', role: 'menu', 'aria-label': t('menu.aria') },
              h(
                'button',
                {
                  type: 'button',
                  className: 'dsu-menuRow',
                  role: 'menuitem',
                  'data-menu-row': 'true',
                  disabled: disabled || groups.length === 0,
                  onClick: showModels
                },
                h('span', { className: 'dsu-menuLabel' }, t('menu.model')),
                h(
                  'span',
                  { className: 'dsu-menuValue' },
                  currentGroup !== null && currentModel !== null
                    ? renderModelLabel(currentGroup, currentModel, 'menu', true)
                    : modelName
                ),
                h(ChevronRight, { className: 'dsu-menuChev' })
              ),
              reasoning !== undefined && efforts.length > 0
                ? h(
                    'button',
                    {
                      type: 'button',
                      className: 'dsu-menuRow',
                      role: 'menuitem',
                      'data-menu-row': 'true',
                      disabled,
                      onClick: showReasoning
                    },
                    h('span', { className: 'dsu-menuLabel' }, t('menu.reasoning')),
                    h('span', { className: 'dsu-menuValue' }, level?.name ?? '—'),
                    h(ChevronRight, { className: 'dsu-menuChev' })
                  )
                : null
            ),
        error !== null ? h('div', { className: 'dsu-menuError', role: 'alert' }, error) : null
      );

      return h(
        'div',
        { className: 'dsu-root', ref: rootRef },
        h(
          'button',
          {
            ref: triggerRef,
            type: 'button',
            className: 'dsu-trigger',
            disabled,
            title: triggerLabel,
            'aria-label': triggerAria,
            'aria-haspopup': 'dialog',
            'aria-expanded': open,
            'aria-controls': open ? (pane === 'reasoning' ? cardId : menuId) : undefined,
            'data-open': open ? 'true' : undefined,
            onClick: () => {
              if (open) close(true);
              else showMenu();
            }
          },
          h('span', { className: 'dsu-triggerLabel' }, labelNode),
          level !== undefined ? h('span', { className: 'dsu-triggerLevel' }, level.name) : null,
          h('span', { 'aria-hidden': 'true', style: { color: '#ff3355', fontSize: 8, marginLeft: 2 } }, '●'),
          busy
            ? h('span', { className: 'dsu-triggerSpinner', 'aria-hidden': 'true' })
            : groups.length > 0
              ? h(ChevronDown, { className: 'dsu-triggerChev' })
              : null
        ),
        open && pane === 'reasoning' ? card : null,
        open && pane !== 'reasoning' ? menu : null
      );
    }

    function UltraReasoning(props) {
      return h(UltraReasoningView, {
        ...props,
        t: typeof props.t === 'function' ? props.t : (key) => key
      });
    }

    return {
      inject: ['locale', 'remote', 'remote.session', 'sessions', 'slots'],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'whale-reasoning: dictionaries');
        ctx.effect(() => {
          const tag = document.createElement('style');
          tag.id = STYLE_ID;
          tag.dataset.plugin = 'dsh-whale-reasoning';
          tag.textContent = CSS;
          document.head.appendChild(tag);
          return () => {
            tag.remove();
          };
        }, 'whale-reasoning: styles');

        ctx.inject(['slots', 'modelDirectories'], (scope) => {
          const models = scope.modelDirectories;
          const sessions = scope.sessions;
          scope.slots.inject('conversation.input.model', () =>
            scope.slots.register(
              {
                name: 'conversation.input.model',
                id: 'whale-reasoning',
                priority: -1,
                locale: NS,
                inject: (sessionId) => {
                  const directory = models.directoryFor(sessionId);
                  const available = sessions.subagentAddress(sessionId) === undefined;
                  return {
                    available,
                    directory: directory.store,
                    load: () => {
                      if (available) directory.load().catch(() => {});
                    },
                    select: (selection) => (available ? directory.select(selection) : Promise.resolve(undefined))
                  };
                }
              },
              UltraReasoning
            )
          );
        });
      }
    };
  }
});
