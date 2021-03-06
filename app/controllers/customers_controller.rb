class CustomersController < ApplicationController
  PAGE_SIZE = 10

  def index
    @page = (params[:page] || 0).to_i
    if params[:keywords].present?
      @keywords = params[:keywords]
      customer_search_term = CustomerSearchTerm.new(@keywords)
      @customers = Customer.where(customer_search_term.where_clause,
                                  customer_search_term.where_args).
                                  order(customer_search_term.order).
                                  offset(PAGE_SIZE * @page).limit(PAGE_SIZE)
    else
      @customers = Customer.all.limit(10).order("updated_at DESC")
    end
    respond_to do |format|
      format.html {}
      format.json { render json: @customers }
    end
  end

  def show
    @customer= Customer.find(params[:id])
    respond_to do |format|
      format.html { render action: 'index'}
      format.json { render json: @customer }
    end
  end

  def edit
    @customer= Customer.find(params[:id])
    respond_to do |format|
      format.html { render action: 'index'}
      format.json { render json: @customer }
    end
  end

  def update
    @customer= Customer.find(params[:id])
    respond_to do |format|
      format.html { render action: 'index'}
      format.json { render json: @customer }
    end
  end

  def destroy
    @customer= Customer.find(params[:id])
    @customer.destroy
    respond_to do |format|
      format.html { render action: 'index'}
      format.json { render json: @customer }
    end
  end

end
