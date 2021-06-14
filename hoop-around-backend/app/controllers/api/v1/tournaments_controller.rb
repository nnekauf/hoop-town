class Api::V1::TournamentsController < ApplicationController
    #set before action that user must be a coach except to view
    # before_action(:require_login, :only_coach, except: {index, :show})
    def index
        tournaments = Tournament.all
        render json: tournaments 
    end
    
    def show
       
        tournament = Tournament.find_by(id: params[:id])
        render json: tournament
    end

    def create
       
        tournament = Tournament.create(tournament_params)
        tournament.organizer_id = session[:user_id]
        # binding.pry
        if tournament.save
            
            binding.pry
            render json: tournament
        else 
           binding.pry
            render json: {message: tournament.errors.full_messages}
        end
    end

    def destroy
        tournament = tournament.find_by(id: params[:id])
        
        tournament.destroy
        render json: {message: "success"}
    end

    private

    def tournament_params

        params.require(:tournament). permit(:name, :venue, :date_time, :host, :about, :street, :city, :state, :zipcode, :organizer_id)
    end
end
