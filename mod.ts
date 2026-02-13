/**
 * Typeahead Web Component for AT Protocol actor handles.
 *
 * Wrap any `<input>` element with `<actor-typeahead>` to get autocomplete
 * suggestions from Bluesky's public API. Framework-agnostic, zero dependencies.
 *
 * @example
 * ```html
 * <actor-typeahead>
 *   <input type="text" placeholder="alice.bsky.social" />
 * </actor-typeahead>
 * ```
 *
 * @module
 */
export { default as ActorTypeahead } from "./src/actor-typeahead.ts";
