# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "willie"
  spec.version       = "0.1.0"
  spec.authors       = ["James Kitchens"]
  spec.email         = ["40303683+kitchensjn@users.noreply.github.com"]

  spec.summary       = "This theme is designed for Willie Graham, LLC."
  spec.homepage      = "https://www.github.com/kitchensjn/willie"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
