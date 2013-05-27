class Entry < ActiveRecord::Base
  attr_accessible :title, :body, :date

  validates :title, :body, :presence => true
end