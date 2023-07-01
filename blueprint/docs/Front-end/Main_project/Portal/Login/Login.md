
## Q1:为什么  background-color不受darkmode的影响

[Dark mode 是一种使用浅色文本和其他 UI 元素在深色背景上的配色方案。](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)

[Dark mode 可以通过 CSS 的媒体查询来检测用户是否在操作系统级别启用了 dark mode，并根据用户的偏好来调整网站的配色方案](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)。


[但是，dark mode 只能影响那些使用了 CSS 变量或者特定的类名来定义颜色的元素。如果一个元素的颜色是直接写死在 CSS 里的，比如 background-color: #ccc;，那么它就不会随着 dark mode 的切换而改变。](https://desenvolvimentoparaweb.com/css/dark-mode-css-facil/)

[要想让这样的元素也能适应 dark mode，就需要使用 CSS 变量或者类名来动态地改变它的颜色](https://desenvolvimentoparaweb.com/css/dark-mode-css-facil/)。

可以使用 prefers-color-scheme 媒体查询来定义两套不同的颜色变量，一套用于 light mode，一套用于 dark mode。然后，您可以在 .container 元素中使用这些变量来设置 background-color，而不是直接写死一个颜色值。这样，当用户切换到 dark mode 时，.container 元素的背景颜色也会相应地改变。

> 案例

```css
:root {
  --bg-color-light: #ccc;
  --bg-color-dark: #333;
}

@media (prefers-color-scheme: light) {
  :root {
    --bg-color: var(--bg-color-light);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: var(--bg-color-dark);
  }
}

.container {
  max-width: 40%;
  margin: 150px 0 0 3%;
  padding: 45px;
  border: 1px solid #ccc;
  border-radius: 1%;
  background-color: var(--bg-color);
}

```
