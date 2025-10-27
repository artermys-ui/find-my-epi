-- Update all existing locations with full addresses including city, state, and zip
UPDATE epipen_locations SET address = '123 Medical Center Dr, New York, NY 10001' WHERE name = 'City Hospital Emergency';
UPDATE epipen_locations SET address = '456 Main Street, New York, NY 10002' WHERE name = 'Central Pharmacy';
UPDATE epipen_locations SET address = '789 Park Avenue, New York, NY 10021' WHERE name = 'Community Health Center';
UPDATE epipen_locations SET address = '321 Education Blvd, Brooklyn, NY 11201' WHERE name = 'School Nurse Office - Lincoln High';
UPDATE epipen_locations SET address = '555 Athletic Way, Queens, NY 11354' WHERE name = 'Sports Complex First Aid';
UPDATE epipen_locations SET address = '111 Hospital Plaza, Newark, NJ 07102' WHERE name = 'Newark Medical Center';
UPDATE epipen_locations SET address = '222 Grove Street, Jersey City, NJ 07302' WHERE name = 'Jersey City Clinic';
UPDATE epipen_locations SET address = '333 Boardwalk, Atlantic City, NJ 08401' WHERE name = 'Atlantic City Pharmacy';