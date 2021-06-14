# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_13_060803) do

  create_table "registrations", force: :cascade do |t|
    t.integer "team_id", null: false
    t.integer "tournament_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["team_id"], name: "index_registrations_on_team_id"
    t.index ["tournament_id"], name: "index_registrations_on_tournament_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tournaments", force: :cascade do |t|
    t.string "name"
    t.string "venue"
    t.datetime "date_time"
    t.string "host"
    t.text "about"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "street"
    t.string "city"
    t.string "state"
    t.integer "zipcode"
    t.integer "organizer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "username"
    t.integer "contact_number"
    t.string "password_digest"
    t.text "bio"
    t.string "first_name"
    t.string "last_name"
    t.integer "role", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "team_id"
  end

  add_foreign_key "registrations", "teams"
  add_foreign_key "registrations", "tournaments"
end
