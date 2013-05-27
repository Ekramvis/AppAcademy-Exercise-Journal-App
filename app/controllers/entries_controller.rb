class EntriesController < ApplicationController
  respond_to :json
  respond_to :html, :only => [:index]

  def index
    @entries = Entry.all.to_json.html_safe

    respond_to do |format|
      format.json { render :json => @entries }
      format.html { render :index }
    end
  end

  def show
    @entry = Entry.find(params[:id])
  end


  def create
    @entry = Entry.new(params[:entry])

    if @entry.save
      render :json => @entry
    else
      render :json => @entry.errors, :status => 422
    end
  end

end













  # respond_to :json
  #
  #
  # def create
  #   @task = Task.new(params[:task])
  #
  #   if @task.save
  #     render :json => @task
  #   else
  #     render :json => @task.errors, :status => 422
  #   end
  # end
  #
  # def index
  #   @tasks = Task.all
  #   respond_to do |format|
  #     format.html { render :index } # entry-point for Backbone app
  #     format.json { render :json => @tasks }
  #   end
  # end
