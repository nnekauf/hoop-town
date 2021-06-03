class ApplicationController < ActionController::API
  
# #I want current user, is_coach? is_player? 
    def current_user
        @current_user = User.find_by(id: session[:user_id])
    end

    def logged_in?
        current_user != nil
    end

    def require_login
        ((flash[:message] = "You must be logged in to do that") && (redirect_to '/login')) if !logged_in?
    end
    
    
    def check_user(user)
        user.id == current_user.id
    end
  
    def coach_or_player(user)
        if user.role == "player"
            return "player"
        else
            return "coach"
        end
    end

    def only_coach(user)
        if user.coach_or_player != "coach"
            render json: {error: 'You must be a coach to do that'}
        end
    end
    # def redirect_if_not_user(user)
    #     if !check_user(user)
    #         if params.to_s.include?("reviews")
    #       flash[:message] = "Sorry, this is not your review!"
    #         elsif params..to_s.include?("reviews")
    #             flash[:message] = "Sorry, these are not your books!"
    #         end
    #       redirect_to "/home"
    #     end
    # end

end
