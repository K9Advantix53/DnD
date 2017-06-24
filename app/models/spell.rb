class Spell < ApplicationRecord
  validates :name, presence: true
  validates :url, presence: true

  self.table_name = "spells"
end
