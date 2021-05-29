class ListsController < ApplicationController

    def index
        render json: List.all #, key_transform: :camel_lower
    end

    def show
       
        list = List.find_by(id: params[:id])
        render json: list
    end

    def create
       
        list = List.create(list_params)
        render json: list
    end

    private

    def list_params

        params.require(:list). permit(:name)
    end
end
