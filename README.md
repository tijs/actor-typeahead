# actor-typeahead

A Web Component that provides typeahead suggestions for AT Protocol (Bluesky)
handles. Uses the public `app.bsky.actor.searchActorsTypeahead` API directly
from the client.

This is a fork of
[jakelazaroff.com/actor-typeahead](https://tangled.org/jakelazaroff.com/actor-typeahead),
originally created by [Jake Lazaroff](https://jakelazaroff.com). This fork is
published to [JSR](https://jsr.io/@tijs/actor-typeahead) as a Deno-native
package with additional features like configurable tag names and CSS custom
properties.

## Usage

```html
<script type="module" src="https://esm.sh/jsr/@tijs/actor-typeahead"></script>

<actor-typeahead>
  <input type="text" placeholder="alice.bsky.social" />
</actor-typeahead>
```

Or import in JavaScript/TypeScript:

```ts
import "@tijs/actor-typeahead";
```

## Attributes

| Attribute | Default                       | Description               |
| --------- | ----------------------------- | ------------------------- |
| `host`    | `https://public.api.bsky.app` | API host for actor search |
| `rows`    | `5`                           | Max suggestions to show   |

## CSS Custom Properties

Style the dropdown via custom properties on `<actor-typeahead>`:

| Property                  | Default   |
| ------------------------- | --------- |
| `--color-background`      | `#ffffff` |
| `--color-border`          | `#e5e7eb` |
| `--color-shadow`          | `#000000` |
| `--color-hover`           | `#fff1f1` |
| `--color-avatar-fallback` | `#fecaca` |
| `--radius`                | `8px`     |
| `--padding-menu`          | `4px`     |

## How it works

Wrap any `<input>` element. The component listens for `input` events on the
slotted input, fetches matching actors, and displays them in a dropdown. When a
suggestion is selected (via click or keyboard), the input value is set and a
native `input` event is dispatched so frameworks (React, etc.) can detect the
change.

Keyboard navigation: Arrow keys, Page Up/Down, Enter to select, Escape to
dismiss.

## Custom tag name

By default, importing the module automatically registers the component as
`<actor-typeahead>`. If you want to use a different tag name, or need to extend
the class before registering, you can disable auto-registration by passing
`?tag=none` in the import URL:

```ts
import { ActorTypeahead } from "@tijs/actor-typeahead?tag=none";

// Register under a custom name
customElements.define("my-handle-picker", ActorTypeahead);
```

You can also pass a custom tag name directly: `?tag=my-handle-picker`.

## License

MIT. The original source code by Jake Lazaroff is licensed under
[MPL-2.0](https://mozilla.org/MPL/2.0/).
