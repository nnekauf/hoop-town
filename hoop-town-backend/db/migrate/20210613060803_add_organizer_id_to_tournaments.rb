class AddOrganizerIdToTournaments < ActiveRecord::Migration[6.1]
  def change
    add_column :tournaments, :organizer_id, :integer
  end
end
