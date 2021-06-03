class RemoveAddressFromTournaments < ActiveRecord::Migration[6.1]
  def change
    remove_column :tournaments, :address, :string
  end
end
