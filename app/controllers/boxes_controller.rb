class BoxesController < ApplicationController
    def index
        boxes = Box.all
        render json: boxes
    end
end

