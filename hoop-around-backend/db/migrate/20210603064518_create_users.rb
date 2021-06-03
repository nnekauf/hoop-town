class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :username
      t.integer :contact_number
      t.string :password_digest
      t.text :bio
      t.string :first_name
      t.string :last_name
      t.integer :role

      t.timestamps
    end
  end
end
