'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FileSchema extends Schema {
  up () {
    this.create('files', (table) => {
      table.increments()
      table.timestamps()
      table.string('title')
      table.binary('document')
      table.integer('task_id').unsigned().references('id').inTable('tasks')
    })
  }

  down () {
    this.drop('files')
  }
}

module.exports = FileSchema
