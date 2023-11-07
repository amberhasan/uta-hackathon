import datetime
class HomeMaintenance:
    def __init__(self):
        self.last_filter_change = datetime.datetime.now()
        self.last_roof_check = datetime.datetime.now()
        self.last_gutter_check = datetime.datetime.now()
        self.last_alarm_check = datetime.datetime.now()
        self.last_landscaping = datetime.datetime.now()
        self.last_pest_control = datetime.datetime.now()
    
    def set_maintenance_date(self, maintenance_type, date):
        if maintenance_type == "filter":
            self.last_filter_change = date
        elif maintenance_type == "roof":
            self.last_roof_check = date
        elif maintenance_type == "gutter":
            self.last_gutter_check = date
        elif maintenance_type == "alarm":
            self.last_alarm_check = date
        elif maintenance_type == "landscaping":
            self.last_landscaping = date
        elif maintenance_type == "pest":
            self.last_pest_control = date
        else:
            print("Invalid maintenance type")

    def get_next_maintenance(self, maintenance_type):
        if maintenance_type == "filter":
            return self.last_filter_change + datetime.timedelta(days=90)
        elif maintenance_type == "roof":
            return self.last_roof_check + datetime.timedelta(days=365)
        elif maintenance_type == "gutter":
            return self.last_gutter_check + datetime.timedelta(days=180)
        elif maintenance_type == "alarm":
            return self.last_alarm_check + datetime.timedelta(days=365)
        elif maintenance_type == "landscaping":
            return self.last_landscaping + datetime.timedelta(days=60)
        elif maintenance_type == "pest":
            return self.last_pest_control + datetime.timedelta(days=120)
        else:
            print("Invalid maintenance type")
            return None

        

