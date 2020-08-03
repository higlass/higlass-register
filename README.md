# HiGlass Register

> Pluggable Track Register Tool for HiGlass

[![HiGlass](https://img.shields.io/badge/higlass-👍-red.svg?colorB=0f5d92)](http://higlass.io)
[![Build Status](https://img.shields.io/travis/higlass/higlass-register/master.svg?colorB=0f5d92)](https://travis-ci.org/higlass/higlass-register)

If you develop pluggable tracks for HiGlass please use this simple tool to _register_ your tracks.

_Note, `higlass-register` is nothing more than an agreed way of exposing plugins to HiGlass. You could circumvent `higlass-register` but then you'll have to take of staying up to date with the plugin registration process yourself._

## Installation

```
npm install --save-dev higlass-register
```

## Usage

To register your track as a plugin

```
import register from 'higlass-register';

import MyFancyNewHiGlassTrack from './MyFancyNewHiGlassTrack';

register({
  track: MyFancyNewHiGlassTrack,
  config: MyFancyNewHiGlassTrack.config,
});
```

Take a look at [HiGlass GeoJSON Track](https://github.com/flekschas/higlass-geojson) for how to write a pluggable track.
