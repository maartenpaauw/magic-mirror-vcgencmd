# MagicMirror vcgencmd

Turn the display on or off through a REST API.

## Getting Started

These instructions will get you a copy of the project up and running on your MagicMirror.

### Prerequisites

What things you need to install the software and how to install them

PM2 needs to be installed globally.

```bash
$ npm install pm2 -g
```

### Installing

Follow these steps to get it installed on the MagicMirror.

Clone the repository.

```bash
$ git clone https://github.com/maartenpaauw/magic-mirror-vcgencmd.git
```

Install the Node modules.

```bash
$ cd magic-mirror-vcgencmd
$ npm install
```

Run the webserver with PM2.

```bash
$ pm2 start pm2.json
```

Save the PM2 state.

```bash
$ pm2 save
```

The webserver will start when the Raspberry Pi reboots.

#### Home Assistant

```yaml
- platform: rest
  name: magic_mirror
  resource: http://magicmirror.local:3000/api/v1/magic-mirror/display
  method: post
  body_on: '{"state": "true"}'
  body_off: '{"state": "false"}'
  is_on_template: "{{ value_json.state }}"
  headers:
    Content-Type: application/json
```

## API endpoints

### GET /api/v1/magic-mirror/display

Will return the current state.

#### Returns

```javascript
{
    "state": false // or true
}
```

### POST /api/v1/magic-mirror/display

Will turn the display on or off and return the current state.

#### Body

```javascript
{
    "state": false // or true
}
```

#### Returns

```javascript
{
    "state": false // or true
}
```

#### Built With

* [Express.js](https://expressjs.com/) - The web framework used
* [vcgencmd](https://www.elinux.org/RPI_vcgencmd_usage) - Linux package that manage the display

## Authors

* Maarten Paauw - *Initial work* - [maartenpaauw](https://github.com/maartenpaauw)

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](https://github.com/maartenpaauw/magic-mirror-vcgencmd/blob/master/LICENSE.md) file for details
