class HomeController < ApplicationController
  include ReactOnRails::Controller

  def index
    redux_store("routerCurrentUserStore", props: {})
    render_html
  end

  private

  def render_html
    respond_to do |format|
      format.html
    end
  end
end
