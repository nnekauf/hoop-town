class UserSerializer < ActiveModel::Serializer

  attributes :id, :email, :username, :contact_number, :bio, :first_name, :last_name, :role, :team_id, :my_tournaments
 belongs_to :team
  def my_tournaments
   
    current_user.team.tournaments.each {|t|
  t}

  end
end
