#!/usr/bin/env node

const asciify = require('asciify-image')
const chalk = require('chalk')
const Table = require('cli-table3')
const path = require('path')

// Info
const data = {
  name: chalk.white.bold('Thomas Dussart'),
  bio: chalk.white.bold('Tech enthusiast'),
  handle: chalk.cyan('@t0m1337'),
  work: chalk.white('Junior Web Developper @ Becode.org'),
  twitter: chalk.cyan('https://twitter.com/t0m1337'),
  github: chalk.cyan('https://github.com/thomasdussart'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/thomasdussart'),
  npx: chalk.white('npx thomasdussart'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelCard: chalk.white.bold('      Card:')
}

const table = new Table()
const newline = '\n'
const heading = `${data.name} - ${data.handle}`
const bio = `${data.bio}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

const getAvatar = async () => {
  const image = path.join(__dirname, '..', 'assets', 'avatar.jpeg')
  let img
  try {
    img = await asciify(image, {
      fit: 'box',
      width: '30%'
    })
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }

  return img
}

async function getOutput () {
  const avatar = await getAvatar()
  const output = newline + newline + heading + newline + bio + newline.repeat(2) + working + newline + twittering + newline + githubing + newline + newline + linkedining + newline + newline + carding

  table.push(
    [avatar, { content: output, vAlign: 'center' }]
  )

  console.log(table.toString())
}

getOutput()
