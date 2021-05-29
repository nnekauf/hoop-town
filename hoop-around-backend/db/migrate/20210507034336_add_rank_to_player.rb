class AddRankToPlayer < ActiveRecord::Migration[6.1]
  def change
    add_column :players, :rank, :integer
  end
end
