class AddStreetCityStateAndZipcodeToTournaments < ActiveRecord::Migration[6.1]
  def change
    add_column :tournaments, :street, :string
    add_column :tournaments, :city, :string
    add_column :tournaments, :state, :string
    add_column :tournaments, :zipcode, :integer
  end
end
