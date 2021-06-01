class TournamentSerializer < ActiveModel::Serializer
  attributes :id, :name, :venue, :address, :date, :time, :host, :about
end
