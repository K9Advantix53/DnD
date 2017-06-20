class Equipment < ApplicationRecord
  validates :name, presence: true
  validates :url, presence: true

  self.table_name = "equipments"
end
