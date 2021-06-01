class CreateLists < ActiveRecord::Migration[6.1]
  def change
    create_table :bists do |t|
      t.string :name

      t.timestamps
    end
  end
end
