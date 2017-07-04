class Inventory < ApplicationRecord
  belongs_to :character
  belongs_to :equipment

  self.table_name = "inventories"
end
