# HiGlass Register

> Pluggable Track Register Tool for HiGlass

[![HiGlass](https://img.shields.io/badge/higlass-👍-red.svg?colorB=0f5d92)](http://higlass.io)
[![Build Status](https://img.shields.io/travis/hms-dbmi/higlass-app/master.svg?colorB=0f5d92)](https://travis-ci.org/hms-dbmi/higlass-app)

If you develop pluggable tracks for HiGlass please use this simple tool to _register_ your tracks.

## Installation

```
npm install --save-dev higlass-register
```

## Usage

To register your track as a plugin

```
import register from 'higlass-register';

import MyFancyNewHiGlassTrack from './MyFancyNewHiGlassTrack';
import config from './config';

register({
  name: 'MyFancyNewHiGlassTrack',
  track: MyFancyNewHiGlassTrack,
  extends: 'Track',
  config,
});
```
