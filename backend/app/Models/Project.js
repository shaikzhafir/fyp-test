'use strict'
const Student = use('App/Models/Student')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {

    student(){
        return this.hasMany('App/Models/Student')
    }

    staff(){
        return this.belongsToMany('App/Models/Staff')
    }

    task(){
        return this.hasMany('App/Models/Task')
    }
}

module.exports = Project