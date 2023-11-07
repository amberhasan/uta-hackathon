class Life:
    def __init__(self, current_savings, current_weight, four_o_one_k, roth_ira, goal_savings, goal_weight) -> None:
        self.four_o_one_k = four_o_one_k
        self.roth_ira = roth_ira
        self.current_savings = current_savings
        self.current_weight = current_weight
        self.goal_savings = goal_savings
        self.goal_weight = goal_weight

        def savings_difference(self):
            return self.goal_savings - self.current_savings

        def weight_difference(self):
            return self.goal_weight - self.current_weight
