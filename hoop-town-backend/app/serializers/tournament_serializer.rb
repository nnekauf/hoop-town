class TournamentSerializer < ActiveModel::Serializer
  attributes :id, :name, :venue, :street, :city, :state, :zipcode, :date_time, :host, :about, :organizer
  has_many :teams

  def organizer
   
    user = User.coach.find_by(id: object.organizer_id)
    user
    
  end
  
  def date_time
    object.date_time.strftime("%a, %b %d, %I:%M %p")
  end
end
