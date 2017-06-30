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

ActiveRecord::Schema.define(version: 20170630003225) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.string  "name"
    t.string  "profession",                   null: false
    t.string  "race"
    t.integer "level",            default: 0, null: false
    t.integer "exp",              default: 0
    t.string  "alignment"
    t.text    "background"
    t.integer "maximum_hp"
    t.integer "current_hp"
    t.integer "armor_class"
    t.integer "strength"
    t.integer "dexterity"
    t.integer "constitution"
    t.integer "intelligence"
    t.integer "wisdom"
    t.integer "charisma"
    t.integer "strength_mod"
    t.integer "dexterity_mod"
    t.integer "constitution_mod"
    t.integer "intelligence_mod"
    t.integer "wisdom_mod"
    t.integer "charisma_mod"
    t.integer "hit_dice",                     null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_characters_on_user_id", using: :btree
  end

  create_table "equipments", force: :cascade do |t|
    t.string "name", null: false
    t.string "url",  null: false
  end

  create_table "spells", force: :cascade do |t|
    t.string "name", null: false
    t.string "url",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "provider"
    t.string   "uid"
    t.string   "name"
    t.text     "image"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
