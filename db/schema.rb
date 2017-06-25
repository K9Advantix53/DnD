# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170624204212) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.string  "name",                         null: false
    t.string  "class",                        null: false
    t.string  "race",                         null: false
    t.integer "level",            default: 0, null: false
    t.integer "exp",              default: 0
    t.string  "alignment",                    null: false
    t.text    "background"
    t.integer "maximum_hp",                   null: false
    t.integer "current_hp",                   null: false
    t.integer "armor_class",                  null: false
    t.integer "strength",                     null: false
    t.integer "dexterity",                    null: false
    t.integer "constitution",                 null: false
    t.integer "intelligence",                 null: false
    t.integer "wisdom",                       null: false
    t.integer "charisma",                     null: false
    t.integer "strength_mod",                 null: false
    t.integer "dexterity_mod",                null: false
    t.integer "constitution_mod",             null: false
    t.integer "intelligence_mod",             null: false
    t.integer "wisdom_mod",                   null: false
    t.integer "charisma_mod",                 null: false
    t.integer "hit_dice",                     null: false
  end

  create_table "equipments", force: :cascade do |t|
    t.string "name", null: false
    t.string "url",  null: false
  end

  create_table "spells", force: :cascade do |t|
    t.string "name", null: false
    t.string "url",  null: false
  end

end
