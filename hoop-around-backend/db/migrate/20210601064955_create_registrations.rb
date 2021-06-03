class CreateRegistrations < ActiveRecord::Migration[6.1]
  def change
    create_table :registrations do |t|
      t.belongs_to :team, null: false, foreign_key: true
      t.belongs_to :tournament, null: false, foreign_key: true

      t.timestamps
    end
  end
end
