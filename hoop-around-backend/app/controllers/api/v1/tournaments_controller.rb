class Api::V1::TournamentsController < ApplicationController
    def index
        render json: Tournament.all #, key_transform: :camel_lower
    end

    def show
       
        tournament = Tournament.find_by(id: params[:id])
        render json: tournament
    end

    def creatt
       
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
