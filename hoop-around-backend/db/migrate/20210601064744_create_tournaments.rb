class CreateTournaments < ActiveRecord::Migration[6.1]
  def change
    create_table :tournaments do |t|
      t.string :name
      t.string :venue
      t.string :address
      t.datetime :date_time
      t.string :host
      t.text :about

      t.timestamps
    end
  end
end
