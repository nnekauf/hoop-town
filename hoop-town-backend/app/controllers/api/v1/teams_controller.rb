class Api::V1::TeamsController < ApplicationController
    def index
        render json: Team.all #, key_transform: :camel_lower
    end

    def show
       
        team = Team.find_by(id: params[:id])
        render json: team
    end

    def create
       
        team = Team.create(team_params)
        render json: team
    end

    def destroy
        team = Team.find_by(id: params[:id])
        
        Team.destroy
        render json: {message: "success"}
    end

    private

    def team_params

        params.require(:team). permit(:name)
    end
end
