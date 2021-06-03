class TournamentSerializer < ActiveModel::Serializer
  attributes :id, :name, :venue, :street, :city, :state, :zipcode, :date_time, :host, :about
end
