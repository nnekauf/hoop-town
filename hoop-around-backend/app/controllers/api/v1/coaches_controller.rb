class CoachesController < ApplicationController
    def index
        render json: Coach.all #, key_transform: :camel_lower
    end

    def show
       
        coach = Coach.find_by(id: params[:id])
        render json: coach
    end

    def create
       
        coach = Coach.create(coach_params)
        render json: coach
    end

    private

    def coach_params

        params.require(:coach). permit(:name)
    end
end
