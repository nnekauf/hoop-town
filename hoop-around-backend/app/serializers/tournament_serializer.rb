class TournamentSerializer < ActiveModel::Serializer
  attributes :id, :name, :venue, :address, :date_time, :host, :about
end
