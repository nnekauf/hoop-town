class Api::V1::TournamentsController < ApplicationController
    #set before action that user must be a coach except to view
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
        render json: tournament
    end

    def destroy
        tournament = tournament.find_by(id: params[:id])
        
        tournament.destroy
        render json: {message: "success"}
    end

    private

    def tournament_params

        params.require(:tournament). permit(:name)
    end
end
