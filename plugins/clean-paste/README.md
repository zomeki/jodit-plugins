# jodit-plugin-clean-patch

A jodit plugin to paste clean html while preserving basic attributes and styles.

Configure the allowed CSS properties with `cleanPasteAllowedStyles`. Entries can
be exact property names or regular expressions. Avoid the `g` and `y` flags,
which make repeated regular-expression tests stateful.

```js
Jodit.make('#editor', {
  cleanPasteAllowedStyles: ['color', /^border-.*/]
});
```

## Dependencies

* jodit 4.19+

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
