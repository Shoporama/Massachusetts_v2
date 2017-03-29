# Massachusetts v2 Theme for Shoporama

Theme to use with the Danish webshop provider Shoporama.

## Usage

### Use as is

Upload all files except the directories prefixed by __* via `sFTP` to the server provided by Shoporama, and you can choose it as a theme.

### Roll your own

Fork the repository and create your own custom changes. Consider contributing to the main repository, if you make improvements which could benefit the community.

### Tweak settings

Please [read the manual](https://github.com/Shoporama/Massachusetts_v2/blob/master/__Guide/massachusetts_v2.0_guide.pdf) in the `Guide`-directory, there is a lot of brilliant stuff there.

## Development

### Getting up and running

    npm install

Should install all dependencies for development.

### Changing files in the project

The theme utilize `gulp` for creating the css based on `.less`-files in the `__dev`-directory. Som make a change to `styles.less`, and then from the commandline run:

    gulp

And the files in `css`-dirctory will be recreated automatically.

## Contribution

Pull requests are more than welcome, and please file issues in the issue queue.
