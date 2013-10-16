# History

This is an overview and may be incomplete. https://github.com/velesin/jasmine-jquery/commits/master is where to see everything.

## v1.5.91 (Oct 1, 2013)
  - fix: caching json data fixtures (#149)

## v1.5.9 (Sept 25, 2013)
  - fix: throw error when loading a fixture that doesn't exist (#146)
  - fix: toHaveCss() to support expecting a css property be auto (#147)
  - fix: toExist() for objects outside of the DOM (#64, #148)

## v1.5.1 (April 26, 2013)
  - add: matcher for jQuery's event.stopPropagation()
  - add: toHaveLength() matcher
  - add: toContainText() matcher
  - add: toHaveBeenTriggeredOnAndWith()
  - fix: stop toHaveValue from coercing types
  - fix: ajax call that was breaking JSONFixture
  - fix: loadStyleFixtures() in IE8
  - fix: make toBeFocused() compatible with PhantomJS
  - fix: update jQuery to 1.9
  - fix: performance improvements
  - fix: other minor fixes
