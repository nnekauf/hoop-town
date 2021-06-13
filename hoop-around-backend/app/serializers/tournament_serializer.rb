class TournamentSerializer < ActiveModel::Serializer
  attributes :id, :name, :venue, :street, :city, :state, :zipcode, :date_time, :host, :about, :organizer
  has_many :teams

  def organizer
    
    # user = User.coach.find_by(id: organizer_id)
    # user
    
  end
  
end
