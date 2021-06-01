class CreateTournaments < ActiveRecord::Migration[6.1]
  def change
    create_table :tournaments do |t|
      t.string :name
      t.string :venue
      t.string :address
      t.date :date
      t.time :time
      t.string :host
      t.text :about

      t.timestamps
    end
  end
end
