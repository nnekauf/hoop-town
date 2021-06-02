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

ActiveRecord::Schema.define(version: 2021_06_01_064955) do

  create_table "coaches", force: :cascade do |t|
    t.string "email"
    t.string "username"
    t.integer "contact_number"
    t.string "password_digest"
    t.text "bio"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "email"
    t.string "username"
    t.integer "contact_number"
    t.string "password_digest"
    t.text "bio"
    t.string "first_name"
    t.string "last_name"
    t.integer "team_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "registrations", force: :cascade do |t|
    t.integer "team_id", null: false
    t.integer "tournamnent_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["team_id"], name: "index_registrations_on_team_id"
    t.index ["tournamnent_id"], name: "index_registrations_on_tournamnent_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.integer "coach_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["coach_id"], name: "index_teams_on_coach_id"
  end

  create_table "tournaments", force: :cascade do |t|
    t.string "name"
    t.string "venue"
    t.string "address"
    t.date "date"
    t.time "time"
    t.string "host"
    t.text "about"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "players", "teams"
  add_foreign_key "registrations", "teams"
  add_foreign_key "registrations", "tournamnents"
  add_foreign_key "teams", "coaches"
end