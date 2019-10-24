class FavoritesController < ApplicationController
    skip_before_action :define_current_user, only: [:index, :myFavorite,:addToFavorites,:destroy]

    def index
        render json: Favorite.all, methods: [:school]
    end

    def myFavorite
        user = User.find(params[:id])
        # school = School.find(params[:id])
        favorite = Favorite.where(user_id: user.id)
        render json: favorite, methods: [:school]
    end
    

    def addToFavorites
        user = User.find(params[:user_id])
        school = School.find(params[:school_id])
        if !Favorite.find_by(user_id: user.id, school_id: school.id)
                favorite = Favorite.create(user_id: user.id, school_id: school.id)
                render json: favorite
            else
                render json: {message: "already favoritededed"}
        end
    end


    def destroy
        
        user = User.find(params[:user_id])
        school = School.find(params[:school_id])
        removeSchool = Favorite.where(user_id: user.id, school_id: school.id)
        removeSchool = removeSchool[0]
        removeSchool.destroy()
        render json: removeSchool,methods: [:school]
    end


    def update
        user = User.find(params[:user_id])
        school =School.find(params[:school_id])
        updatedSchool = Favorite.where(user_id: user.id, school_id: school.id)
        updatedSchool = updatedSchool[0]
        updatedSchool.update(has_applied: true)
        render json: updatedSchool, methods: [:school]
    end
    

end
